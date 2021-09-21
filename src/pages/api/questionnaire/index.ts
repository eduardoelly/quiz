import { shuffle } from '../../../functions/arrays'
import questions from "../questionsDatabase"

export default function questionnaire(req, res) {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}