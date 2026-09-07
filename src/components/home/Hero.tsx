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

export default function Hero() {
  return (
    <div className="">
      <div className="flex flex-col w-3/6 h-64 bg-zinc-900 px-4 py-3 rounded-4xl mx-auto">
        {/* textarea */}
        <div className="flex-1">
          <p>hi</p>
        </div>

        {/* prompt area */}
        <form className="flex bg-zinc-900 px-4 py-3 rounded-full mx-auto">
          <div className="flex-1 bg-input/40 rounded-l-full flex justify-center items-center">
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
          </div>

          <Button
            className="h-full bg-zinc-600 rounded-r-full w-12"
            type="submit"
          >
            <ArrowBigUp className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
