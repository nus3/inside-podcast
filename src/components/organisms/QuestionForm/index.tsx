import { Button } from 'components/atoms/buttons/Button'
import { useEffect } from 'react'
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form'

import styles from './style.module.css'

export type Question = {
  text: string
}

export type QuestionFormValues = {
  questions: Question[]
}

export type QuestionFormPresenterProps = {
  onSubmit: (values: QuestionFormValues) => void
  onSelect: (question?: string) => void
}

export const QuestionFormPresenter = ({
  onSubmit,
  onSelect,
}: QuestionFormPresenterProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
  } = useFormContext<QuestionFormValues>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  })

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles['question-list-wrap']}>
        {fields.map((f, i) => (
          <div key={f.id} className={styles['question-wrap']}>
            <input
              {...register(`questions.${i}.text` as const)}
              className={styles['input']}
              placeholder="text"
              defaultValue={f.text}
            />
            <Button
              label="削除"
              color="secondary"
              onClick={() => {
                remove(i)
              }}
            />
            <Button
              label="選択"
              color="secondary"
              onClick={() => {
                onSelect(f.text)
              }}
            />
          </div>
        ))}
      </div>
      <footer className="flex gap-8">
        <Button
          label="質問追加"
          color="secondary"
          onClick={() => {
            append({ text: '' })
          }}
        />
        <Button label="保存" color="secondary" submit />
      </footer>
    </form>
  )
}

export type QuestionFormContainerProps = {
  onSubmit: (values: QuestionFormValues) => void
  onSelect: QuestionFormPresenterProps['onSelect']
  formValues?: QuestionFormValues
}

export const QuestionFormContainer = ({
  onSubmit,
  formValues,
  onSelect,
}: QuestionFormContainerProps): JSX.Element => {
  const { reset } = useFormContext<QuestionFormValues>()

  useEffect(() => {
    reset(formValues)
  }, [formValues])

  return <QuestionFormPresenter onSubmit={onSubmit} onSelect={onSelect} />
}

export type QuestionFormProps = {
  onSubmit: (values: QuestionFormValues) => void
  onSelect: QuestionFormPresenterProps['onSelect']
  formValues?: QuestionFormValues
}

export const QuestionForm = ({
  onSubmit,
  onSelect,
  formValues,
}: QuestionFormProps): JSX.Element => {
  const methods = useForm<QuestionFormValues>({
    defaultValues: {
      questions: formValues?.questions,
    },
  })

  return (
    <FormProvider {...methods}>
      <QuestionFormContainer
        onSubmit={onSubmit}
        onSelect={onSelect}
        formValues={formValues}
      />
    </FormProvider>
  )
}
