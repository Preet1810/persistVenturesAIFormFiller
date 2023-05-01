import User from "../models/User.js";
import Company from "../models/Company.js";

export const registerCompany=async (req, res) => {
    try {
        const { accomplishments, address, city, clientNo, companyBrief, companyName, contactNo, country, email, experience, fullname, funding, linkedin, revenueGeneration, role, startingYear, state, website }=req.body;
        const userId=req.user.id;

        // Update the user with the additional information
        const updatedUser=await User.findByIdAndUpdate(userId, {
            fullname,
            contactNo,
            role,
            experience,
            linkedin,
        }, { new: true });

        // Create a new company
        const newCompany=new Company({
            companyName,
            website,
            funding,
            startingYear,
            clientNo,
            address,
            city,
            state,
            country,
            companyBrief,
            revenueGeneration,
            accomplishments,
        });

        // Save the new company to the database
        const savedCompany=await newCompany.save();

        // Push the new company to the user's companies array
        updatedUser.companies.push(savedCompany);
        await updatedUser.save();

        res.status(200).json({ message: "Company registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
