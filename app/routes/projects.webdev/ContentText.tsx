import { Heading, Text, Table, TableRow, TableCell, List, ListItem, Link } from 'app/components/Components';
import styles from './content.module.css';

const ContentText = ({ visible, titleId }: { visible: boolean; titleId: string }) => (
  <>
  <List className={styles.description} data-visible={visible} size="l" as={'ul'}>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>I use <Link secondary href={'https://code.visualstudio.com/'}>VS Code</Link> as my text editor, with Tokyo Night theme and Fira Code and Operator Mono as the base typefaces.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}><Link secondary href={'https://www.google.com/chrome/'}>Chrome</Link> is my main browser, with <Link secondary  href={'https://www.mozilla.org/en-US/firefox/'}>Firefox</Link> as my secondary.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>I'm currently learning <Link secondary  href={'https://react.dev/'}>React</Link> for my front-end JavaScript library. I'd like to get into the mindset of the component-centric model for UI/UX design.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>In a similar vein, I'll be learning <Link secondary  href={'https://motion.dev/'}>Motion</Link> for JavaScript animations, complementing React.</Text></ListItem>
    <ListItem><Text className={styles.description} data-visible={visible} size={'l'}>For CSS, Less, SCSS, and other pre-compiling, I use <Link secondary  href={'https://prepros.io/'}>Prepros</Link>.</Text></ListItem>
    </List>
    <br />
    <br /> 
  <Heading className={styles.title} data-visible={visible} level={3} weight={'light'} id={titleId}>System Setup</Heading>
    <Table className={styles.table} data-visible={visible}>  
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        DESKTOP
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Custom built in 2020</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        OS
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Windows 11 Pro</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        CASE
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Fractal Design Meshify C Black ATX High-Airflow Compact Light Tint Tempered Glass Mid Tower Computer Case, FD-CA-MESH-C-BKO-TGL</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        RAM
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">G.SKILL Ripjaws V Series 64GB (4 x 16GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Intel XMP 2.0 Desktop Memory Model F4-3200C16Q-64GVK</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        CPU
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Intel Core i7-10700K Comet Lake 8-Core 3.8 GHz LGA 1200 125W Desktop Processor w/ Intel UHD Graphics 630</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        MOBO
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">ASRock Z490 Phantom Gaming 4/2.5G LGA 1200 Intel Z490 SATA 6Gb/s ATX Intel Motherboard</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        GPU
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">EVGA GeForce RTX 3070 FTW3 ULTRA GAMING, 08G-P5-3767-KR, 8GB GDDR6, iCX3 Technology, ARGB LED, Metal Backplate</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        HDD
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">WD_Black SN750 1TB NVMe Internal Gaming SSD - Gen3 PCIe, M.2 2280, 3D NAND - WDS100T3X0C</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        HDD
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Crucial MX500 1TB 3D NAND SATA 2.5 Inch Internal SSD - CT1000MX500SSD1(Z)</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        PSU
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">EVGA SuperNOVA 650 Ga, 80 Plus Gold 650W, Fully Modular, ECO Mode with Dbb Fan, 10 Year Warranty, Compact 150mm Size, Power Supply 220-GA-0650-X1</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        NIC
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">TP-Link WiFi 6 AX3000 PCIe WiFi Card w/ External Antenna</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        COOLING
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Cooler Master MasterLiquid LC240E RGB Close-Loop AIO CPU Liquid Cooler, 240mm Radiator, Dual Chamber RGB Pump, Dual MF120R RGB Fans, RGB Lighting for AMD Ryzen/Intel LGA1200/1151</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        COOLING
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Arctic Silver 5 Thermal Compound Paste 3.5g</Text>
    </TableCell>
  </TableRow>
  <TableRow className={styles.row} data-visible={visible}>
    <TableCell>
      <Heading className={styles.title} data-visible={visible} level={5} weight={'regular'}>
        NAS
      </Heading>
    </TableCell>
    <TableCell>
        <Text className={styles.description} data-visible={visible} size="l">Synology DS218+ DiskStation 2-Bay NAS System w/ 2x WD Red Plus Internal NAS HDD 3.5" - 4TB in Synology Hybrid RAID</Text>
    </TableCell>
  </TableRow>
</Table>
      </>

);

export default ContentText;