import { Heading, Text, Table, TableRow, TableCell, List, ListItem, Link } from '../../components/Components';
import styles from './forensics.module.css';

const ForensicsText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>  
    <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>Crime Scene Investigator and Firearms Examiner</Heading>
    <Table className={styles.table} data-visible={visible}>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Previous Employers
      </Heading>
    </TableCell>
    <TableCell>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text><Link secondary href={'https://www.sdsheriff.gov'}>San Diego County Sheriff's Department</Link></Text></ListItem>
        <ListItem><Text><Link secondary href={'https://gfjc.fiu.edu/'}>FIU Global Forensic Science and Justice Center</Link></Text></ListItem>
        <ListItem><Text><Link secondary href={'https://www.azdps.gov/'}>Arizona Department of Public Safety</Link></Text></ListItem>
        <ListItem><Text><Link secondary href={'https://www.oag.ca.gov/'}>California Department of Justice</Link></Text></ListItem>
      </List>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Forensic Experience
      </Heading>
    </TableCell>
    <TableCell>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text>Forensic Biology</Text></ListItem>
        <ListItem><Text>Forensic Firearms Analysis</Text></ListItem>
        <ListItem><Text>Crime Scene Investigation</Text></ListItem>
        <ListItem><Text>Bloodstain Pattern Analysis</Text></ListItem>
        <ListItem><Text>Trajectory Analysis</Text></ListItem>
        <ListItem><Text>Crime Scene and Shooting Incident Reconstruction</Text></ListItem>
      </List>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Testimony Experience
      </Heading>
    </TableCell>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'thin'}>
        Qualified Subjects
      </Heading>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text>Forensic Biology</Text></ListItem>
        <ListItem><Text>Forensic Firearms Analysis</Text></ListItem>
        <ListItem><Text>Crime Scene Investigation and Reconstruction</Text></ListItem>
      </List>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'thin'}>
        Levels of Court
      </Heading>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text><b>State</b>: Arizona and California</Text></ListItem>
        <ListItem><Text><b>Federal</b>: U.S. District Court for the Central District of California</Text></ListItem>
      </List>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Publications
      </Heading>
    </TableCell>
    <TableCell>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text>Lu, Stephen J. "The Cultural Context of Forensic Laboratories in California." The CACNews, Summer 2023, August 29, 2023.</Text></ListItem>
        <ListItem><Text>Lu, Stephen J. and Olivia A. Mendoza. "On a Mission to Improve Leadership in Forensics" Catalyst Magazine (Tucson, AZ), December 18, 2023.</Text></ListItem>
        <ListItem><Text>Lu, Stephen J. 2024. CSI to CEO: What the Dead Can Teach Us About Life and Leadership. Edited by Eve Porinchak. 1st ed. San Diego: Independent.</Text></ListItem>
        </List>
    </TableCell>
  </TableRow>
</Table>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}><br />Detailed Professional History</Heading>
      <Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>Throughout his forensic career, Stephen has analyzed over a thousand cases and participated in hundreds of death investigations, including homicides, suicides, officer-involved shootings, autopsies, and custodial deaths. Most recently, he served for ten years as a Criminalist with the San Diego County Sheriff’s Department, specializing in Forensic Biology, Forensic Firearms Analysis, and Crime Scene Investigation and Reconstruction.</Text>
<Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>
Stephen also spent six years as a contract assessor and trainer with the National Forensic Science Technology Center (now FIU Global Forensic and Justice Center), where he performed DNA laboratory audits and taught courses on DNA amplification, likelihood ratios, and population statistics. Prior to that, Stephen worked with the Arizona Department of Public Safety, performing casework in Forensic Biology, and the California Department of Justice’s Richmond DNA Lab, where he contributed to the FBI’s Combined DNA Index System (CODIS).</Text>
<Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>
Over his career, Stephen has completed more than 2,000 hours of professional training in areas such as Forensic Biology, Forensic Firearms Analysis, Trajectory Analysis, Bloodstain Pattern Analysis, and courtroom testimony. He has testified as an expert witness in superior courts in Arizona and California, and in federal court for the U.S. District Court for the Central District of California. Stephen's courtroom experience has been noted for his ability to explain complex scientific concepts in an understandable and engaging way for juries and attorneys alike.</Text>
<Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>
In addition to his forensic science work, Stephen served as the Regional Director South for the California Association of Criminalists (CAC), where he organized regional study groups and hosted presentations by experts, including a keynote address by Jeff Udvarhelyi, an Escondido Police Department Child Abuse Detective, on a significant child abuse case. As the Lead Webmaster for the CAC, he enhanced the organization’s public presence by overhauling its website for better communication and engagement.</Text>
<Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>
Since retiring from active casework, Stephen has shifted his focus towards leadership development in forensic science. He founded the Forensic Leaders Training Center®, where he provided online leadership and management training for forensic professionals, helping them to advance their careers and improve workplace culture. Stephen's interest in leadership and public education is further reflected in his recent book, <i>CSI to CEO</i>, where he covers forensic science topics such as DNA analysis, crime scene investigation, bloodstain pattern analysis, and forensic leadership for a general audience. In 2023, Stephen had the honor of graduating from the FBI San Diego's Citizens Academy as a demonstration of his continued dedication to public service.</Text>
  </>

);

export default ForensicsText;