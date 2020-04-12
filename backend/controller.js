const Form = require('./model')

exports.getAllForms = (req, res, next) => {
  Form.find({}, function (err, forms) {
    res.send(forms);
  });
}

exports.saveForm = async (req, res, next) => {
  const newForm = new Form({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  })

  const data = await Form.create(newForm)
  res.status(201).json({ message: "Form added", data: data });
}

exports.updateForm = async (req, res, next) => {
  // console.log(req.params.id);
  // const newForm = new Form({
  //   name: req.body.name,
  //   email: req.body.email,
  //   message: req.body.message
  // })


  // if (req.body.name) {
  // 	User.updateOne(
  // 		{ _id: req.userData.userId },
  // 		{ $set: { name: req.body.name } },
  // 		response => {
  // 			console.log(req.body.name);
  // 		}
  // 	);
  // }

  const data = await Form.updateOne({ _id: req.params.id },
    { $set: { name: req.body.name, email: req.body.email, message: req.body.message } })
  res.status(201).json({ message: "Form updated", data: data });


}

exports.deleteForm = async (req, res, next) => {
  const data = await Form.deleteOne({ _id: req.params.id })
  res.status(201).json({ message: "Form deleted", data: data });
}