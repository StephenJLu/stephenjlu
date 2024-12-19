import React, { useState, useEffect } from 'react';
import { Section, Heading, Text, Table, TableRow, TableCell, DecoderText, Transition,
   Divider, InViewport, Image, List, ListItem, Link } from '../../components/Components';
import styles from './forensics.module.css';
import banner from 'app/static/images/forensics.jpg';

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
    <Table className={styles.table}>
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
      <Heading className={styles.title} data-visible={visible} level={4} weight={'regular'}>Detailed History</Heading>
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
          src={banner}
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
