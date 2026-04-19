import mongosh from "mongosh";

const urlschema = new mongosh.Schema({
    url: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    }
});

export const UrlModel = mongosh.model("Url", urlschema);