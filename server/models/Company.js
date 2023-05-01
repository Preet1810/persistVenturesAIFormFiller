import mongoose from "mongoose";

const CompanySchema=new mongoose.Schema(
    {
        companyName: {
            type: String,
        },
        website: {
            type: String,
        },
        funding: {
            type: Number,
        },
        startingYear: {
            type: Number,
        },
        clientNo: {
            type: Number,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
        companyBrief: {
            type: String,
        },
        revenueGeneration: {
            type: String,
        },
        accomplishments: {
            type: String,
        },

    },
    { timestamps: true }
);

const Company=mongoose.model("Company", CompanySchema);
export default Company;
