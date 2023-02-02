const mongoose = require("mongoose");
const url = `mongodb+srv://madmax:12345@cluster0.xllfpbm.mongodb.net/store?retryWrites=true&w=majority`
mongoose.set("strictQuery",false)
mongoose.connect(url,{
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(()=>{
console.log("database is connected ")
}).catch(()=>{
console.log("database is not connected ")
    
})


