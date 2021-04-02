import classnames from 'classnames'
import { Button } from 'components/atoms/buttons/Button'
import { Text } from 'components/atoms/texts/Text'
import { useEffect, useState } from 'react'
import { sleep } from 'util/sleep'

import styles from './index.module.css'

export const Example = (): JSX.Element => {
  // 命名に目を向けないでぇ
  const [high, setHigh] = useState<boolean>(false)
  const [long, setLong] = useState<boolean>(false)
  const [down, setDown] = useState<boolean>(false)
  const [rotate, setRotate] = useState<boolean>(false)
  const [swing, setSwing] = useState<boolean>(false)

  // レンダリングされたタイミングでアニメーションしたい場合はuseEffectを使う
  useEffect(() => {
    const setClass = async () => {
      await sleep(1000)
      setDown(true)
      setRotate(true)
      setSwing(true)
    }

    setClass()
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles['contents-warp']}>
        <Text fontSize="2xl" bold color="primary">
          transition + jsを使ったアニメーション例
        </Text>
        <div className={styles['card-wrap']}>
          <div className={styles.card}>
            <Text fontSize="sm">高くなります</Text>
            <div className="mb-6">
              <Button
                color="primary"
                label="click me!"
                labelSize="sm"
                onClick={() => setHigh(!high)}
                rounded
              />
            </div>
            <div
              className={classnames(styles['content1'], {
                [styles.high]: high,
              })}
            >
              <Text color="white">content1</Text>
            </div>
          </div>
          <div className={styles.card}>
            <Text fontSize="sm">伸びます</Text>
            <div className="mb-6">
              <Button
                color="primary"
                label="click me!"
                labelSize="sm"
                onClick={() => setLong(!long)}
                rounded
              />
            </div>
            <div
              className={classnames(styles['content2'], {
                [styles.long]: long,
              })}
            >
              <Text color="white">content2</Text>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['contents-warp']}>
        <Text fontSize="2xl" bold color="primary">
          @keyframes + animationプロパティを使ったアニメーション例
        </Text>
        <div className={styles['card-wrap']}>
          <div className={styles.card}>
            <Text fontSize="sm">下にいきます</Text>
            <div
              className={classnames(styles['content3'], {
                [styles['move-down']]: down,
              })}
            >
              <Text color="white">content3</Text>
            </div>
          </div>
          <div className={styles.card}>
            <Text fontSize="sm">回転します</Text>
            <div
              className={classnames(styles['content4'], {
                [styles['rotate']]: rotate,
              })}
            >
              <Text color="white">content4</Text>
            </div>
          </div>
          <div className={styles.card}>
            <Text fontSize="sm">揺れます</Text>
            <div
              className={classnames(styles['content5'], {
                [styles['swing']]: swing,
              })}
            >
              <Text color="white">content5</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
