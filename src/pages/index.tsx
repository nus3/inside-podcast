import { Question } from 'components/organisms/Question'
import { QuestionLayout } from 'components/organisms/QuestionLayout'
import { useQuestionStore } from 'hooks/store/useQuestionStore'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { STORE_KEY } from 'store'

const QuestionPage: NextPage = () => {
  const { question } = useQuestionStore()

  const [currentQuestion, setCurrentQuestion] = useState<string | undefined>(
    question.currentQuestion,
  )

  window.addEventListener('storage', (e) => {
    if (e.key !== `persist:${STORE_KEY}`) {
      return
    }

    if (e.newValue === null) return

    const store = JSON.parse(e.newValue)
    if (!('question' in store)) return

    const q = JSON.parse(store.question)
    if (!('currentQuestion' in q)) return
    if (typeof q.currentQuestion !== 'string') return

    setCurrentQuestion(q.currentQuestion)
  })

  useEffect(() => {
    setCurrentQuestion(question.currentQuestion)
  }, [question.currentQuestion])

  return (
    <QuestionLayout>
      <Question text={currentQuestion} />
    </QuestionLayout>
  )
}

export default QuestionPage
