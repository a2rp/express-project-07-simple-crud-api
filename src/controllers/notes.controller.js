let notes = [
    {
        id: 1,
        title: "First Note",
        content: "This is the first note",
    },
    {
        id: 2,
        title: "Second Note",
        content: "This is the second note",
    },
];

const MAX_TITLE_LENGTH = 120;
const MAX_CONTENT_LENGTH = 5000;

const parseNoteId = (value) => {
    if (!/^[1-9]\d*$/.test(value)) {
        return null;
    }

    const noteId = Number(value);
    return Number.isSafeInteger(noteId) ? noteId : null;
};

const validateNoteBody = (body, { partial = false } = {}) => {
    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return { error: "Request body must be a JSON object." };
    }

    const fields = ["title", "content"];
    const unsupportedField = Object.keys(body).find(
        (field) => !fields.includes(field),
    );

    if (unsupportedField) {
        return { error: `"${unsupportedField}" is not a supported note field.` };
    }

    if (partial && !fields.some((field) => Object.hasOwn(body, field))) {
        return { error: "Provide a title or content field to update." };
    }

    const data = {};

    for (const [field, maxLength] of [
        ["title", MAX_TITLE_LENGTH],
        ["content", MAX_CONTENT_LENGTH],
    ]) {
        if (!partial || Object.hasOwn(body, field)) {
            const value = body[field];

            if (
                typeof value !== "string" ||
                value.trim().length === 0 ||
                value.trim().length > maxLength
            ) {
                return {
                    error: `${field} must be a non-empty string of at most ${maxLength} characters.`,
                };
            }

            data[field] = value.trim();
        }
    }

    return { data };
};

const badRequest = (res, message) =>
    res.status(400).json({
        success: false,
        message,
    });

const getAllNotes = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All notes fetched successfully",
        data: notes,
    });
};

const getSingleNote = (req, res) => {
    const noteId = parseNoteId(req.params.id);

    if (noteId === null) {
        return badRequest(res, "Note id must be a positive integer.");
    }

    const note = notes.find((item) => item.id === noteId);

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Note not found",
        });
    }

    res.status(200).json({
        success: true,
        message: "Single note fetched successfully",
        data: note,
    });
};

const createNote = (req, res) => {
    const validated = validateNoteBody(req.body);

    if (validated.error) {
        return badRequest(res, validated.error);
    }

    const nextId =
        notes.reduce((largestId, note) => Math.max(largestId, note.id), 0) + 1;
    const newNote = {
        id: nextId,
        ...validated.data,
    };

    notes.push(newNote);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: newNote,
    });
};

const modifyNote = (req, res, partial) => {
    const noteId = parseNoteId(req.params.id);

    if (noteId === null) {
        return badRequest(res, "Note id must be a positive integer.");
    }

    const noteIndex = notes.findIndex((item) => item.id === noteId);

    if (noteIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Note not found",
        });
    }

    const validated = validateNoteBody(req.body, { partial });

    if (validated.error) {
        return badRequest(res, validated.error);
    }

    notes[noteIndex] = {
        ...(partial ? notes[noteIndex] : { id: noteId }),
        ...validated.data,
    };

    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        data: notes[noteIndex],
    });
};

const updateNote = (req, res) => modifyNote(req, res, false);
const patchNote = (req, res) => modifyNote(req, res, true);

const deleteNote = (req, res) => {
    const noteId = parseNoteId(req.params.id);

    if (noteId === null) {
        return badRequest(res, "Note id must be a positive integer.");
    }

    const note = notes.find((item) => item.id === noteId);

    if (!note) {
        return res.status(404).json({
            success: false,
            message: "Note not found",
        });
    }

    notes = notes.filter((item) => item.id !== noteId);

    res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        data: note,
    });
};

module.exports = {
    getAllNotes,
    getSingleNote,
    createNote,
    updateNote,
    patchNote,
    deleteNote,
};
