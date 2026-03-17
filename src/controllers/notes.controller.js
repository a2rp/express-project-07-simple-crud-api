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

const getAllNotes = (req, res) => {
    res.status(200).json({
        success: true,
        message: "All notes fetched successfully",
        data: notes,
    });
};

const getSingleNote = (req, res) => {
    const noteId = Number(req.params.id);

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
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({
            success: false,
            message: "Title and content are required",
        });
    }

    const newNote = {
        id: notes.length ? notes[notes.length - 1].id + 1 : 1,
        title,
        content,
    };

    notes.push(newNote);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: newNote,
    });
};

const updateNote = (req, res) => {
    const noteId = Number(req.params.id);
    const { title, content } = req.body;

    const noteIndex = notes.findIndex((item) => item.id === noteId);

    if (noteIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Note not found",
        });
    }

    notes[noteIndex] = {
        ...notes[noteIndex],
        title: title || notes[noteIndex].title,
        content: content || notes[noteIndex].content,
    };

    res.status(200).json({
        success: true,
        message: "Note updated successfully",
        data: notes[noteIndex],
    });
};

const deleteNote = (req, res) => {
    const noteId = Number(req.params.id);

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
    deleteNote,
};
