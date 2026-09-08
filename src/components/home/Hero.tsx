"use client";
import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowBigUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Aurora from "../Aurora";
import GradientText from "../GradientText";
import BorderGlow from "../BorderGlow";

export default function Hero() {
  return (
    <div className="">
      <div className="relative">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={3}
          speed={1}
        />
      </div>

      {/* text area */}
      <div>
        <h2 className="text-4xl font-semibold text-center my-4 uppercase">
          Build with the speed of
          <br></br>
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B497CF"]}
            animationSpeed={2.5}
            showBorder
            className="custom-class text-6xl my-3"
          >
            AI
          </GradientText>
        </h2>
      </div>

      <BorderGlow
        edgeSensitivity={30}
        glowColor="40 80 80"
        backgroundColor="#120F17"
        borderRadius={28}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated={true}
        colors={["#c084fc", "#f472b6", "#38bdf8"]}
        className="flex flex-col w-3/6 h-60 bg-zinc-900 px-4 py-2 rounded-4xl mx-auto ring-1 "
      >
        {/* textarea */}
        <div className="flex-1">{/* <p>hi</p> */}</div>

        {/* prompt area */}
        <form className="flex px-4 py-3 rounded-full mx-auto">
          <div className="flex-1 bg-input/40 rounded-full flex justify-center items-center">
            <Textarea
              placeholder="type ur prompt"
              className="border-0 focus-visible:ring-0 resize-none min-h-0 w-52 focus-visible:w-96 px-4 py-4 transition-[width] duration-300 ease-in-out"
            />
            {/* select model */}
            <div className="rounded-full px-2">
              <Select defaultValue={"chatgpt"}>
                <SelectTrigger className={"w-full bg-red-400"}>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Available Models</SelectLabel>
                    <SelectItem value="chatgpt">ChatGPT</SelectItem>
                    <SelectItem value="claude">Claude</SelectItem>
                    <SelectItem value="kimmy">Kimmy</SelectItem>
                    <SelectItem value="deepseek">Deepseek</SelectItem>
                    <SelectItem value="gemini">Gemini</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button className=" bg-zinc-600 rounded-full mr-4" type="submit">
              <ArrowBigUp className="size-5" />
            </Button>
          </div>
        </form>
      </BorderGlow>
    </div>
  );
}
