import React from 'react'
import { View } from 'react-native'

interface IProps {
  s2?: boolean
  s3?: boolean
  s6?: boolean
  s8?: boolean
  s12?: boolean
  s16?: boolean
  s24?: boolean
  s32?: boolean
}

const Space: React.FC<IProps> = ({ s2, s3, s6, s8, s16, s12, s24, s32 }) => {
  let space = 8
  space = s2 ? 2 : space
  space = s3 ? 3 : space
  space = s3 ? 3 : space
  space = s6 ? 6 : space
  space = s8 ? 8 : space
  space = s12 ? 12 : space
  space = s16 ? 16 : space
  space = s24 ? 24 : space
  space = s32 ? 32 : space

  return <View style={{ marginVertical: space }}></View>
}

export default Space