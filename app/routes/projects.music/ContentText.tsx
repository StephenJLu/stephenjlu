import { Text, List, ListItem, Link } from '~/components';
import styles from './content.module.css';

const ContentText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>
  <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>For instrumentation, I have a Yamaha U1 upright piano, an Epiphone by Gibson Les Paul Model Cherry Sunburst electric guitar, and an Epiphone PR 350 acoustic guitar.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>My main amplifier is a 38W Fender Frontman Reverb Amp.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>For electronic instrumentation, I use a <Link secondary href={'https://us.novationmusic.com/impulse'}>Novation Impulse 61</Link>, <Link secondary href={'https://us.novationmusic.com/launch'}>Novation Launchpad X</Link>, and a <Link secondary href={'https://us.novationmusic.com/launchkey'}>Novation Launchkey Mini</Link>.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>To integrate all this together, I use an <Link secondary href={'https://www.m-audio.com/audio-midi-interfaces/air-192-8.html'}>M-Audio AIR 192 | 8</Link> Audio MIDI Interface.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>For time-keeping, I use a <Link secondary href={'https://www.soundbrenner.com/pages/pulse'}>Soundbrenner Pulse</Link> wrist metronome.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>I utilize <Link secondary href={'https://www.splice.com/'}>Splice</Link> for royalty-free, pre-generated sampling, loops, and presets (I let the professionals do the sound engineering).</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>For fine sound editing, I use <Link secondary href={'https://www.audacityteam.org/'}>Audacity</Link> and <Link secondary href={'https://www.adobe.com/products/audition.html'}>Audition</Link>. I'm currently exploring <Link secondary href={'https://acestudio.ai/'}>ACE Studio</Link> to include vocals in my music, which would be amazing.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>Finally, my DAW of choice is <Link secondary href={'https://www.ableton.com/en/'}>Ableton Live 11</Link>.</Text></ListItem>
    </List>    
      </>
);

export default ContentText;