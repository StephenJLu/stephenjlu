import { Text } from '~/components/text/text';
import { List } from '~/components/list/list';
import { ListItem } from '~/components/list/list';
import { Link } from '~/components/link/link';
import styles from './content.module.css';

const ContentText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>
  <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.als.org/'}>The ALS Association</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.alssandiego.org'}>ALS San Diego</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.alsaz.org/'}>ALS Arizona</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.als.net/'}>ALS Therapy Development Institute</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://augiesquest.org/'}>Augie's Quest</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://axeals.org/'}>axeALS Foundation (Stevens Nation)</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://heralsstory.org/'}>Her ALS Story</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.iamals.org/'}>I AM ALS</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://paintforacure.org/'}>Paint for a Cure</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.synapticure.com/'}>Synapticure</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.teamgleason.org'}>Team Gleason</Link></Text></ListItem>
    </List>       
      </>
);

export default ContentText;