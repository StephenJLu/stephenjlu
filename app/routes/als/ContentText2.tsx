import { Text } from '~/components/text/text';
import { List } from '~/components/list/list';
import { ListItem } from '~/components/list/list';
import { Link } from '~/components/link/link';
import styles from './content.module.css';

const ContentText2 = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>
  <List className={styles.description} data-visible={visible} size="l" as={'ul'}>    
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.instagram.com/carbajalphoto/'}>Anthony Carbajal</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.instagram.com/alswarriorjenn/'}>Jennifer Schroedl</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.teamhighoctane.com/'}>Julian Rodriguez</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.amazon.com/dp/B0DNN4337V'}>Mayuri Saxena</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://sunnystrong.com/'}>Sunny Brous</Link></Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.instagram.com/witt_wolfpack/'}>Todd Witt</Link></Text></ListItem>     
    </List>
    </>
);

export default ContentText2;