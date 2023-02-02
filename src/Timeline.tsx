import React, { ReactNode } from "react"
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  FlatListProps,
} from "react-native"
import type { PartiallyOptional, ContentProps, EventToRender } from "./Types"
import styles from "./styles"

type EventTimeProps = {
  time?: ContentProps
  style?: StyleProp<ViewStyle>
}

const EventTime = ({ time, style }: EventTimeProps) => {
  return (
    <View style={[styles.timeContainer, style]}>
      {time?.content ? (
        <Text style={[styles.time, time.style ?? {}]}>{time.content}</Text>
      ) : (
        <></>
      )}
    </View>
  )
}

type EventIconProps = {
  icon?: ReactNode
  iconStyle?: StyleProp<ViewStyle>
  lineStyle?: StyleProp<ViewStyle>
}

const EventIcon = ({ icon, iconStyle, lineStyle }: EventIconProps) => {

  return (
    <View style={[styles.iconContainer, iconStyle]}>
      <>{icon}</>
      <View style={[styles.verticalLine, lineStyle]} />
    </View>
  )
}

/*
Event component, is the component in which you can render whatever the event is about,
e.g. Title, description, or even render a custom template by sending a render-prop with whatsoever
content you need.
*/

type EventProps = {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}

const Event = ({ children, style }: EventProps) => {
  return <View style={[styles.eventContainer, style]}>{children}</View>
}

/*
Row component, is the component that combines all the sub-components (EventIcon, Event, EventTime) and
gets each 'event' as an argument of type object
*/

type RowProps = {
  event: EventToRender
  eventStyle?: StyleProp<ViewStyle>
  timeContainerStyle?: StyleProp<ViewStyle>
  iconContainerStyle?: StyleProp<ViewStyle>
  lineStyle?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
}

const Row = ({
  event,
  eventStyle,
  timeContainerStyle,
  iconContainerStyle,
  lineStyle,
  contentContainerStyle,
}: RowProps) => {
  const title = event.title
  const description = event.description

  return (
    <TouchableOpacity
      disabled={Boolean(!event.pressAction)}
      style={[styles.row, eventStyle]}
      onPress={event.pressAction}
    >
      <EventTime time={event.time} style={timeContainerStyle} />
      <EventIcon
        icon={event.icon}
        iconStyle={iconContainerStyle}
        lineStyle={lineStyle}
      />
      <Event style={contentContainerStyle}>
        <>
          {(title as ContentProps).content ? (
            <Text style={[styles.title, (title as ContentProps).style]}>
              {(title as ContentProps).content}
            </Text>
          ) : (title as ReactNode) ? (
            title
          ) : (
            <></>
          )}
          {(description as ContentProps).content ? (
            <Text
              style={[styles.description, (description as ContentProps).style]}
            >
              {(description as ContentProps).content}
            </Text>
          ) : (description as ReactNode) ? (
            description
          ) : (
            <></>
          )}
        </>
      </Event>
    </TouchableOpacity>
  )
}

type TimelineProps = {
  flatList: PartiallyOptional<FlatListProps<EventToRender>, "renderItem">
  rowProps?: Omit<RowProps, "event">
}

const Timeline = ({ flatList, rowProps }: TimelineProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        {...flatList}
        renderItem={({ item }) => <Row event={item} {...rowProps} />}
        keyExtractor={(_, ndx) => ndx.toString()}
      />
    </View>
  )
}

export default Timeline
