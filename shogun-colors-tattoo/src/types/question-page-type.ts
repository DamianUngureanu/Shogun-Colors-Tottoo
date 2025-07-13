import { StaticImageData } from "next/image";
import QuestionType from "./question-type";

type QuestionPageType = {
  startingImage: StaticImageData;
  questions: QuestionType[];
};

export default QuestionPageType;
