import './App.css';

import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
import '@kyndryl-design-system/shidoka-applications/components/global/header';
import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
import '@kyndryl-design-system/shidoka-applications/components/global/footer';

import '@kyndryl-design-system/shidoka-charts/components/chart';

import UserAvatar16 from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/user.svg?react';
import UserAvatar20 from '@kyndryl-design-system/shidoka-icons/svg/monochrome/20/user.svg?react';
import UserAvatar24 from '@kyndryl-design-system/shidoka-icons/svg/monochrome/24/user.svg?react';

function App() {
  return (
    <>
      <kyn-ui-shell>
        <kyn-header divider="" apptitle="Shidoka React">
          <kyn-header-nav>
            <kyn-header-link href="javascript:void(0)">
              <UserAvatar24 />
              Link 1
            </kyn-header-link>
            <kyn-header-link href="javascript:void(0)" isActive>
              <UserAvatar24 />
              Link 2
            </kyn-header-link>
            <kyn-header-link href="javascript:void(0)">
              <UserAvatar24 />
              Link 3
              <kyn-header-link slot="links" href="javascript:void(0)">
                Sub Link 1
              </kyn-header-link>
              <kyn-header-link slot="links" href="javascript:void(0)">
                Sub Link 2
              </kyn-header-link>
            </kyn-header-link>
          </kyn-header-nav>

          <kyn-header-flyouts>
            <kyn-header-flyout assistiveText="Account">
              <UserAvatar20 slot="button" />

              <kyn-header-link href="javascript:void(0)"> Login </kyn-header-link>
              <kyn-header-link href="javascript:void(0)"> Sign up </kyn-header-link>
            </kyn-header-flyout>
          </kyn-header-flyouts>
        </kyn-header>

        <kyn-local-nav>
          <kyn-local-nav-link href="javascript:void(0)" active="">
            <UserAvatar16 slot="icon" />
            Link 1
          </kyn-local-nav-link>

          <kyn-local-nav-link href="javascript:void(0)">
            <UserAvatar16 slot="icon" />
            Link 2
            <kyn-local-nav-link slot="links" href="javascript:void(0)">
              {' '}
              L2 Link 1{' '}
            </kyn-local-nav-link>
            <kyn-local-nav-link slot="links" href="javascript:void(0)">
              {' '}
              L2 Link 2{' '}
            </kyn-local-nav-link>
          </kyn-local-nav-link>

          <kyn-local-nav-link href="javascript:void(0)" expanded="">
            <UserAvatar16 slot="icon" />
            Link 3
            <kyn-local-nav-link slot="links" href="javascript:void(0)">
              L2 Link 1
              <kyn-local-nav-link slot="links" href="javascript:void(0)">
                {' '}
                L3 Link 1{' '}
              </kyn-local-nav-link>
              <kyn-local-nav-link slot="links" href="javascript:void(0)">
                {' '}
                L3 Link 2{' '}
              </kyn-local-nav-link>
            </kyn-local-nav-link>
          </kyn-local-nav-link>
        </kyn-local-nav>

        <main>
          <div className="kd-grid">
            <div className="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-12">
              <h1 className="kd-type--headline-03">Shidoka React Sample App</h1>
            </div>

            <div className="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-8">
              <kd-chart
                type="bar"
                height="400"
                chartTitle="Bar Chart"
                description="Description"
                labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}
                datasets={[
                  {
                    label: 'Dataset 1',
                    data: [12, 19, 3, 5, 2, 3],
                  },
                  {
                    label: 'Dataset 2',
                    data: [8, 15, 7, 9, 6, 12],
                  },
                ]}
                options={{
                  scales: {
                    x: {
                      title: {
                        text: 'Color',
                      },
                    },
                    y: {
                      title: {
                        text: 'Votes',
                      },
                    },
                  },
                }}
              />
            </div>

            <div className="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-4">
              <kd-chart
                type="doughnut"
                chartTitle="Doughnut Chart"
                description="Description"
                height="400"
                labels={['Blue', 'Red', 'Orange', 'Yellow', 'Green', 'Purple']}
                datasets={[
                  {
                    label: 'Dataset 1',
                    data: [12, 19, 3, 5, 2, 3],
                  },
                ]}
                options={{
                  scales: {
                    x: {
                      title: {
                        text: 'Color',
                      },
                    },
                    y: {
                      title: {
                        text: 'Votes',
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </main>

        <kyn-footer>
          <span slot="copyright"> Copyright &copy; 2023 Kyndryl Inc. All rights reserved. </span>
        </kyn-footer>
      </kyn-ui-shell>
    </>
  );
}

export default App;
