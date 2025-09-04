import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting a Job',
    Svg: require('@site/static/img/undraw_interview.svg').default,
    description: (
      <>
        You want to craft the best story possible that will reasonate with the hiring team.  It's always a good idea to see if you have 
        the necessary technical skills to fit in with the team and if the company/team culture is the right vibe.  
        There are always alternatives to industry such as grad school, personal projects, or gap years. 
      </>
    ),
  },
  {
    title: 'Recruitment Process',
    Svg: require('@site/static/img/undraw_code_thinking.svg').default,
    description: (
      <>
        Try not to sweat it!    Hiring teams want to make sure you can contribute value and work well with others.  Every hiring team is different,
        but in general if you have worked in a group project, have a readable resume, and know the basics of programming you have a good chance to be extended an offer.
      </>
    ),
  },
  {
    title: "Working in Industry",
    Svg: require('@site/static/img/undraw_happy_announcement.svg').default,
    description: (
      <>
        Every industry, company, and team are different and bring their unique culture with them to the workplace.  The soft skills you learn in school, clubs, 
        and other aspects of life will be used at any job or interaction you have in the workplace. Know that the company and hiring team you are interviewing for
        are people just like you and me. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
