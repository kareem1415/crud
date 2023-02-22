const Task = require('../model/taskModel');

exports.getTasks =  async (req, res) => {
    let task = await Task.find();

    if(!task) {
        res.status(500).json({success: false})
    }
    res.send(task)
}

exports.getTask = async (req, res) => {
    let task = await Task.findById(req.params.id);
    if (!task) {
        res.status(500).json({success: false})
    }
    res.status(200).send(task);

}

exports.creatTask = async (req, res) => {
    let task = new Task({
        title: req.body.title,
        text: req.body.text,
    })

    task = await task.save();

    if(!task){
        return res.status(400).send('the task cannot be created')
    } else {
        res.status(200).send(task)
    }
}

exports.updateTask =  async (req, res) => {
    let task = await Task.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            text: req.body.text,
        },
        { new: true }
    )

    if(!task)
    return res.status(500).send('the task cannot be updated!')

    res.send(task);
}

exports.deletTask =  (req, res)=> {
    Task.findByIdAndRemove(req.params.id).then(task => {
        if(task) {
            return res.status(200).json({success: true, message: 'the task has been deleted!'})
        } else {
            return res.status(404).json({ success: false, message: 'task not found' })
        }
    }).catch(err => {
        return res.status(500).json({success: false, error: err})
    })
}