import React from "react";
import classes from "./question.module.css";
import QuestionType from "@/types/question-type";

interface QuestionProps {
  language: "ro" | "en";
  question: QuestionType;
  [x: string]: any;
}

const Question = ({ language, question, ...rest }: QuestionProps) => {
  return (
    <div className={classes.container} {...rest}>
      <h1>{language == "ro" ? question.titleRo : question.titleEn}</h1>
      <p>
        {language == "ro" ? question.descriptionRo : question.descriptionEn}
      </p>
    </div>
  );
};

export default Question;
