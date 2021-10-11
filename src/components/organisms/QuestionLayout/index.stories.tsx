import { Question } from 'components/organisms/Question'
import { QuestionLayout } from 'components/organisms/QuestionLayout'

export default {
  title: 'organisms/layouts/QuestionLayout',
}

export const Default = (): JSX.Element => (
  <QuestionLayout>
    <Question text="質問文です" />
  </QuestionLayout>
)
