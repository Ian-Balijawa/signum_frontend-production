import { Tab } from "@headlessui/react";
import styles from "./style.module.css";

const PublicationNavTab = () => {
  return (
    <>
      <Tab.Group>
        <Tab.List className={`${styles.line}`}>
          <Tab
            className={({ selected }) =>
              `${selected ? styles.active : styles.inactive}`
            }
          >
            Latest
          </Tab>

          <Tab
            className={({ selected }) =>
              `${selected ? styles.active : styles.inactive}`
            }
          >
            Featured
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className={styles.gallery}>Latest content</Tab.Panel>
          <Tab.Panel>Featured content</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};

export default PublicationNavTab;
