import React, { ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'
import { Spacing } from '../types'
import { useTheme } from '../useTheme'
import { BoxProps, boxPropsToStyle } from './Box'

export interface StackProps extends BoxProps {
  horizontal?: boolean

  // Align items centered along the main axis
  center?: boolean

  // Spacing between items
  spacing?: Spacing

  children: ReactNode[] | ReactNode
}

export function Stack(props: StackProps) {
  const theme = useTheme()
  const { horizontal, center, spacing = 'default', children } = props

  const boxStyle = boxPropsToStyle(props, theme)
  const stackStyle: ViewStyle = {
    flexDirection: horizontal ? 'row' : 'column',
    alignItems: center ? 'center' : 'stretch',
  }

  const margin = theme.spacing[spacing]
  const gapStyle: ViewStyle = {
    height: horizontal ? '100%' : margin,
    width: horizontal ? margin : '100%',
  }

  const childrenArr = Array.isArray(children) ? children : [children]
  const childrenWithGaps: ReactNode[] = []
  for (let i = 0; i < childrenArr.length; i++) {
    if (i > 0) {
      childrenWithGaps.push(<View key={'__stack_gap_' + i} style={gapStyle} />)
    }
    childrenWithGaps.push(childrenArr[i])
  }

  return <View style={[boxStyle, stackStyle]}>{childrenWithGaps}</View>
}
