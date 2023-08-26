import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    await connect(); // Call the connect function

    const { name, email, password } = await request.json(); // Await the promise

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse("User has been Created", {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    return new NextResponse("An error occurred", {
      status: 500,
    });
  }
};
