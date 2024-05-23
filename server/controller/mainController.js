//Homepage
exports.homepage = async (req, res) => {
    const locals = {
        title: "NoteHub",
        description: "Free NodeJS Notes App",
    };
    res.render("index", { locals, layout: "../views/layouts/front-page" });
};

//About
exports.about = async (req, res) => {
    const locals = {
        title: "About -  NoteHub",
        description: "Free NodeJS Notes App",
    };
    res.render("about", locals);
};
