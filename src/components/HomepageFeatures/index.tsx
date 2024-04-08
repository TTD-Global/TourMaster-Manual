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
    title: 'Manage',
    Svg: require('@site/static/img/Edit.svg').default,
    description: (
      <>
        You can easily organize your tour. And you can check various information to prepare well.
      </>
    ),
  },
  {
    title: 'Edit',
    Svg: require('@site/static/img/Manage.svg').default,
    description: (
      <>
        You can check the information and make changes easily.
      </>
    ),
  },
  {
    title: 'Easy',
    Svg: require('@site/static/img/Prepare2.svg').default,
    description: (
      <>
        You'll have fun once you learn how to use it. It's not difficult. Try it.
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
