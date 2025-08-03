import React, { useState } from "react";
import classes from "./question.module.css";
import QuestionType from "@/types/question-type";
import Input from "@/components/input";
import Button from "@/components/button";

interface QuestionProps {
  isDeleted: boolean;
  isNew: boolean;
  isModified: boolean;
  question: QuestionType;
  onDelete: () => void;
  onModify: (service: QuestionType) => void;
}

const Question = ({
  isDeleted,
  isNew,
  isModified,
  question,
  onDelete,
  onModify,
}: QuestionProps) => {
  const [newQuestion, setNewQuestion] = useState<QuestionType>(question);
  const handleChangeData = (
    value: string | number,
    key: keyof QuestionType
  ) => {
    setNewQuestion((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div
      className={classes.container}
      data-status={
        isDeleted
          ? "deleted"
          : isModified
          ? "modified"
          : isNew
          ? "new"
          : "default"
      }
    >
      <label htmlFor="">nume ro</label>
      <Input
        defaultValue={newQuestion.titleRo}
        onChange={(e) => handleChangeData(e.target.value, "titleRo")}
      />
      <label htmlFor="">nume en</label>
      <Input
        defaultValue={newQuestion.titleEn}
        onChange={(e) => handleChangeData(e.target.value, "titleEn")}
      />
      <label htmlFor="">descriere ro</label>
      <Input
        defaultValue={newQuestion.descriptionRo}
        onChange={(e) => handleChangeData(e.target.value, "descriptionRo")}
      />
      <label htmlFor="">descriere en</label>
      <Input
        defaultValue={newQuestion.descriptionEn}
        onChange={(e) => handleChangeData(e.target.value, "descriptionEn")}
      />
      <Button onClick={() => onModify(newQuestion)}>
        Pastreaza modificarile
      </Button>
      <Button onClick={onDelete}>Sterge</Button>
    </div>
  );
};

export default Question;
