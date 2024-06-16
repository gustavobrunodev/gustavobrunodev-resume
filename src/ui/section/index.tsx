import * as React from 'react'
import { cn } from '../../cn'
import { useTheme } from '../../hooks'
import { Style, StyleSheet, Text, View } from '../../react-pdf'

export interface SectionProps {
  style?: Style
  title: string
  spacing: number
  children: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 9,
    textTransform: 'uppercase',
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  separator: {
    height: 2,
    marginTop: 1,
    marginBottom: 12,
  },
})

export const Section: React.FC<SectionProps> = ({
  style,
  title,
  spacing,
  children,
}) => {
  const theme = useTheme()

  const childCount = React.Children.count(children)

  return (
    <View style={cn(styles.container, style)}>
      <Text style={[styles.title, { color: theme.colors.gray }]}>{title}</Text>
      <View
        style={[styles.separator, { backgroundColor: theme.colors.gray }]}
      />
      {React.Children.map(children, (child, index) => {
        const mb = index + 1 === childCount ? 0 : spacing
        const style = { marginBottom: mb }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return mb ? React.cloneElement(child, { style }) : child
      })}
    </View>
  )
}
