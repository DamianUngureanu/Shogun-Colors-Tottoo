import React, { useState } from "react";
import classes from "./intrebari.module.css";
import { QuestionPageData } from "@/data/question-page-data";
import Input from "@/components/input";
import Question from "./question";
import QuestionType from "@/types/question-type";
import Button from "@/components/button";
import { handleQuestionPageChange } from "../scripts/admin-scripts";
// Tip pentru array-ul extins
type QuestionWithFlags = {
  isNew: boolean;
  isDeleted: boolean;
  isModified: boolean;
  question: QuestionType;
};
const Intrebari = () => {
  const [startImage, setStartImage] = useState<File | null>(null);
  const [questions, setQuestions] = useState<QuestionWithFlags[]>(
    QuestionPageData.questions.map((question) => ({
      isNew: false,
      isDeleted: false,
      isModified: false,
      question,
    }))
  );

  const handleOnDelete = (index: number) => {
    setQuestions((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, isDeleted: !item.isDeleted } : item
      )
    );
  };
  const handleOnNew = () => {
    const newQuestion: QuestionWithFlags = {
      isNew: true,
      isDeleted: false,
      isModified: false,
      question: {
        titleRo: "",
        titleEn: "",
        descriptionRo: "",
        descriptionEn: "",
      } as QuestionType,
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };
  const handleQuestionModifing = (newQuestion: QuestionType, index: number) => {
    setQuestions((prev) =>
      prev.map((item, idx) =>
        idx === index
          ? {
              ...item,
              question: newQuestion,
              isModified: true,
            }
          : item
      )
    );
    console.log(questions);
  };
  const handleSave = async () => {
    // Filtrează serviciile care nu sunt șterse și extrage doar obiectul service
    const modifyedQuestions = questions
      .filter((item) => !item.isDeleted)
      .map((item) => item.question);

    await handleQuestionPageChange(startImage, modifyedQuestions);
  };
  return (
    <div className={classes.container}>
      <label htmlFor="">imaginea de start</label>
      <Input
        type="file"
        accept="image/*"
        onChange={(element) => setStartImage(element.target.files?.[0] || null)}
      ></Input>
      {questions.map((element, index) => {
        return (
          <Question
            key={index}
            isDeleted={element.isDeleted}
            isNew={element.isNew}
            isModified={element.isModified}
            question={element.question}
            onDelete={() => handleOnDelete(index)}
            onModify={(questions) => handleQuestionModifing(questions, index)}
          />
        );
      })}
      <Button onClick={handleOnNew}>+ Adauga serviciu</Button>
      <br />
      <Button onClick={handleSave}>Salveaza</Button>
    </div>
  );
};

export default Intrebari;
