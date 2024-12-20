import { Heading, Text, Table, TableRow, TableCell, List, ListItem, Link } from '../../components/Components';
import styles from './research.module.css';
import nihPoster from '/docs/nih-poster.pdf';

const ResearchText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>  
    <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>Insect Biochemistry and Human Cell Biology</Heading>
    <Table className={styles.table} data-visible={visible}>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Previous Employers
      </Heading>
    </TableCell>
    <TableCell>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text><Link secondary href={'https://www.nih.gov/'}>National Institutes of Health</Link></Text></ListItem>
        <ListItem><Text><Link secondary href={'https://www.arizona.edu/'}>University of Arizona</Link></Text></ListItem>        
      </List>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Areas of Research
      </Heading>
    </TableCell>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'thin'}>
        Insect Biology and Biochemistry
      </Heading>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text>Fat Metabolism</Text></ListItem>
        <ListItem><Text>Protease Regulation</Text></ListItem>
        <ListItem><Text>Amino Acid Metabolism</Text></ListItem>
        <ListItem><Text>Primer Design, PCR, and RNAi</Text></ListItem>
        <ListItem><Text>Radiological Tagging</Text></ListItem>
        </List>
        <Heading className={styles.title} data-visible={visible} level={5} weight={'thin'}>Human Biology and Biochemistry
      </Heading>
      <List>
        <ListItem><Text>Niemann-Pick Type C Disease</Text></ListItem>
        <ListItem><Text>Neutral Lipid Trafficking</Text></ListItem>
        <ListItem><Text>Fluorescent Microscopy</Text></ListItem>
      </List>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Primary Investigators and Lead Research Teams
      </Heading>
    </TableCell>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'thin'}>
        University of Arizona Department of Biochemistry and Molecular Biophysics
      </Heading>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text><b>Dr. Michael A. Wells</b></Text></ListItem>
        <ListItem><Text>James E. Pennington</Text></ListItem>
        <ListItem><Text>Jorge Zamora</Text></ListItem>
        <ListItem><Text>April R. Stonehouse</Text></ListItem>
        <ListItem><Text>Linda M. Mobula</Text></ListItem>
        <ListItem><Text>Michelle C. Hines</Text></ListItem>
      </List>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'thin'}>
        National Institute of Diabetes and Digestive and Kidney Diseases
      </Heading>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text><b>Dr. E. Joan Blanchette-Mackie</b></Text></ListItem>
        <ListItem><Text>Peter Pentchev</Text></ListItem>
        <ListItem><Text>Nancy Dwyer</Text></ListItem>
        <ListItem><Text>Lin Sun</Text></ListItem>
        <ListItem><Text>Marcy Comly</Text></ListItem>
        <ListItem><Text>Sanjay Patel</Text></ListItem>
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
        <ListItem><Text>Lu, Stephen J., James E. Pennington, April R. Stonehouse, Meta M. Mobula, and Michael A. Wells. "Reevaluation of the Role of Early Trypsin Activity in the Transcriptional Activation of the Late Trypsin Gene in the Mosquito Aedes Aegypti." Insect Biochemistry and Molecular Biology 36, no. 4 (2006): 336-343. <Link secondary href={'https://doi.org/10.1016/j.ibmb.2006.01.011'}>https://doi.org/10.1016/j.ibmb.2006.01.011.</Link></Text>
        </ListItem>
        <ListItem><Text>Lu, Stephen J., Nancy Dwyer, Marcy Comply, and E. Joan Blanchette-Mackie. "Neutral Lipid Trafficking Differentiates Niemann-Pick C (NPC) 1 from NPC2 Mutant Fibroblasts." Poster. Section of Lipid Cell Biology/LCBB, NIDDK, National Institutes of Health, Bethesda, MD. <Link secondary href={nihPoster} target="_blank" rel="noopener noreferrer" download>Download Poster</Link></Text>
        </ListItem>
        </List>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Education and Certifications
      </Heading>
    </TableCell>
    <TableCell>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Text><b>Executive Master of Business Administration with Honors</b> — Business Administration and Management, Quantic School of Business and Technology</Text></ListItem>
        <ListItem><Text><b>Bachelor of Science with Honors</b> — Biochemistry and Molecular Biophysics and Molecular and Cellular Biology, University of Arizona. Phi Beta Kappa, <i>magna cum laude</i></Text></ListItem>
        <ListItem><Text><b>Society for Human Resource Management Certified Professional</b></Text></ListItem>
        <ListItem><Text><b>2023 FBI San Diego Citizens' Academy</b></Text></ListItem>        
      </List>
    </TableCell>
  </TableRow>
</Table>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}><br />Detailed Professional History</Heading>
      <Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>Before his career in forensics, Stephen worked for six years as a published research scientist. Under Dr. Michael Wells at the University of Arizona, he studied protease regulation in the Yellow Fever mosquito, <i>Aedes aegypti</i>. He also completed an internship at the National Institutes of Health/NIDDK, studying neutral lipid trafficking in Niemann-Pick Type C disease under Dr. E. Joan Blanchette-Mackie.</Text>
<Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>
Stephen holds an Executive MBA with Honors from Quantic School of Business and Technology and a Bachelor of Science with Honors, <i>magna cum laude</i>, in Biochemistry and Molecular Biophysics and Molecular and Cellular Biology from the University of Arizona. Stephen is a Society for Human Resource Management Certified Professional (SHRM-CP). In addition, he is a member of Phi Beta Kappa, an honor society recognizing exceptional academic achievements in the humanities, social sciences, natural sciences, and mathematics.</Text>
<Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>
Stephen volunteers his time and resources to support and improve the lives of people living with Amyotrophic Lateral Sclerosis (ALS). He is a community member of UC San Diego Health's Patient and Family Advisory Council, working to unify patients, family, and team members to enhance the experience for everyone, evaluate strategies and improve quality and safety outcomes.</Text>
<Text className={styles.description} data-visible={visible} size={'l'} as={'p'}>
In his free time, Stephen enjoys reading and writing, web development, electronic music composition and production, and playing with Aries, a stubborn Siberian Husky.</Text>
  </>

);

export default ResearchText;