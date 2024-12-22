import { cn } from '../../cn'
import { useTheme } from '../../hooks/use-theme'
import { Image, Link, Style, StyleSheet, Text, View } from '../../react-pdf'
import { IconText } from '../icon-text'

export interface HeadingProps {
  style?: Style
  avatarSize?: number
  avatarUrl?: string
  title: string
  subtitle: string
  information: {
    phone?: string
    email: string
    website: string
    github?: string,
    linkedin?: string,
    location: string
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 16,
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    top: -20,
  },
  image: {
    borderRadius: 99999,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 20,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  link: {
    marginRight: 16,
    textDecoration: 'none',
  },
})

export function Heading({
  style,
  title,
  subtitle,
  avatarUrl,
  avatarSize = 100,
  information: { phone, email, website, github, linkedin, location },
}: HeadingProps) {
  const theme = useTheme()

  return (
    <View style={cn(styles.container, style)}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subTitle, { color: theme.colors.primary }]}>
          {subtitle}
        </Text>
        <View style={styles.infoContainer}>
          {phone ? (
            <Link src={`tel:${phone}`} style={styles.link}>
              <IconText text={phone} iconName="call" />
            </Link>
          ) : null}
          <Link src={`mailto:${email}`} style={styles.link}>
            <IconText text={email} iconName="atSymbol" />
          </Link>


          <Link src={website} style={styles.link}>
            <IconText text={website} iconName="link" />
          </Link>
          {github ? (
            <Link src={github} style={styles.link}>
              <IconText text={`@${github.split('/').splice(-1)}`} iconName="github" />
            </Link>
          ) : null}
          {linkedin ? (
            <Link src={linkedin} style={styles.link}>
              <IconText text={`@${linkedin.split('/').splice(-1)}`} iconName="linkedin" />
            </Link>
          ) : null}
          <IconText text={location} iconName="location" />
        </View>
      </View>
      {avatarUrl && (
        <View
          style={[
            styles.imageContainer,
            { width: avatarSize, height: avatarSize },
          ]}
        >
          <Image style={styles.image} src={avatarUrl} />
        </View>
      )}
    </View>
  )
}
