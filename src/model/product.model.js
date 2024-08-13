const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name:"String",
        rate:"Number",
        createdBy:"String",
        updatedBy:"String"
    }
);

module.exports = mongoose.model("product",productSchema);