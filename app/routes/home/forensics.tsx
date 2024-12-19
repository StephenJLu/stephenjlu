import React, { useState, useEffect } from 'react';
import { Section, Heading, Text, Table, TableRow, TableCell, DecoderText, Transition,
   Divider, InViewport, Image, List, ListItem, Link } from '../../components/Components';
   import { media } from '../../utils/style'
import styles from './forensics.module.css';
import banner from 'app/static/images/forensics.jpg';
import bannerFull from 'app/static/images/forensics.full.jpg';

interface ForensicsProps {
  id?: string;
  sectionRef?: React.RefObject<HTMLElement>;
}

interface ForensicsComponentProps extends ForensicsProps {
  visible: boolean;  
}

const ForensicsText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>  
    <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>Crime Scene Investigator and Firearms Examiner</Heading>
    <Table data-visible={visible}>
  <TableRow>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Previous Employers
      </Heading>
    </TableCell>
    <TableCell>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><Link href={'https://www.sdsheriff.gov'}>San Diego County Sheriff's Department</Link></ListItem>
        <ListItem><Link href={'https://gfjc.fiu.edu/'}>FIU Global Forensic Science and Justice Center</Link></ListItem>
        <ListItem><Link href={'https://www.azdps.gov/'}>Arizona Department of Public Safety</Link></ListItem>
        <ListItem><Link href={'https://www.oag.ca.gov/'}>California Department of Justice</Link></ListItem>
      </List>
    </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>
        Forensic Experience
      </Heading>
    </TableCell>
    <TableCell>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem>Forensic Biology</ListItem>
        <ListItem>Forensic Firearms Analysis</ListItem>
        <ListItem>Crime Scene Investigation</ListItem>
        <ListItem>Bloodstain Pattern Analysis</ListItem>
        <ListItem>Trajectory Analysis</ListItem>
        <ListItem>Crime Scene and Shooting Incident Reconstruction</ListItem>
      </List>
    </TableCell>
  </TableRow>
  <TableRow>
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
        <ListItem>Forensic Biology</ListItem>
        <ListItem>Forensic Firearms Analysis</ListItem>
        <ListItem>Crime Scene Investigation and Reconstruction</ListItem>
      </List>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'thin'}>
        Levels of Court
      </Heading>
      <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
        <ListItem><b>State</b>: Arizona and California</ListItem>
        <ListItem><b>Federal</b>: U.S. District Court for the Central District of California</ListItem>
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
  </>

);
interface ForensicsComponentProps extends ForensicsProps {
  visible: boolean;}

export const Forensics = ({ id, visible, sectionRef }: ForensicsComponentProps) => {  
  const [focused, setFocused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const titleId = `${id}-title`;  
  
  return (
    <Section       
      className={styles.forensics}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}  
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}      
      >        
        <Transition in={visible || focused} timeout={0} unmount={false}>
          {({ visible, nodeRef }: { visible: boolean; nodeRef: React.RefObject<HTMLDivElement> }) => (
            <>
            <div className={styles.backgroundImage} data-visible={visible} ref={nodeRef}>
        <Image                    
          srcSet={`${banner} 600w, ${bannerFull} 2080w`}
          width={2080}
          height={1120}
          sizes={`(max-width: ${media.mobile}px) 100vw, 2080px`}
          placeholder={`${banner.split('.')[0]}-placeholder.jpg`}
          alt="Forensics banner"                    
        />
        <div className={styles.gradient} />
      </div>
                                 
            
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <InViewport>
                {(inViewport) => {
                  useEffect(() => {
                    if (inViewport) {
                      setIsInViewport(true);
                    }
                  }, [inViewport]);
                  return (
                    <div className={styles.tagText} data-visible={visible}>
                      {isInViewport && (
                        <DecoderText
                          text={'Forensics'}
                          delay={1400}
                        />
                      )}
                    </div>
                  );
                }}
                </InViewport>            
              </div>
                <ForensicsText visible={visible} titleId={titleId} />          
          </>
        )}        
      </Transition>
    </Section>
  );
};
