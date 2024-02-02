import './App.css';

import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
import '@kyndryl-design-system/shidoka-applications/components/global/header';
import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
import '@kyndryl-design-system/shidoka-applications/components/global/footer';

import reactifyWc from 'reactify-wc';
import '@kyndryl-design-system/shidoka-charts/components/chart';

const KdChart = reactifyWc('kd-chart');
const KynUIShell = reactifyWc('kyn-ui-shell');
const KynHeader = reactifyWc('kyn-header');
const KynHeaderPanel = reactifyWc('kyn-header-panel');
const KynHeaderPanelLink = reactifyWc('kyn-header-panel-link');
const KynHeaderNav = reactifyWc('kyn-header-nav');
const KynHeaderLink = reactifyWc('kyn-header-link');
const KynHeaderFlyouts = reactifyWc('kyn-header-flyouts');
const KynHeaderFlyout = reactifyWc('kyn-header-flyout');
const KynHeaderAvatar = reactifyWc('kyn-header-avatar');
const KynLocalNav = reactifyWc('kyn-local-nav');
const KynLocalNavLink = reactifyWc('kyn-local-nav-link');
const KynFooter = reactifyWc('kyn-footer');

import SwitcherIcon from '@kyndryl-design-system/shidoka-foundation/assets/svg/switcher.svg?react';
import { UserAvatar } from '@carbon/icons-react';

function App() {
  return (
    <>
      <KynUIShell>
        <KynHeader divider="" apptitle="Shidoka React">
          <KynHeaderPanel slot="left" heading="Panel Heading">
            <SwitcherIcon slot="button" />

            <KynHeaderPanelLink href="javascript:void(0)">
              <UserAvatar size={24} />
              Link 1
            </KynHeaderPanelLink>
            <KynHeaderPanelLink href="javascript:void(0)">
              <UserAvatar size={24} />
              Link 2
            </KynHeaderPanelLink>
            <KynHeaderPanelLink href="javascript:void(0)">
              <UserAvatar size={24} />
              Link 3
            </KynHeaderPanelLink>
          </KynHeaderPanel>

          <KynHeaderNav>
            <KynHeaderLink href="javascript:void(0)"> Link 1 </KynHeaderLink>
            <KynHeaderLink href="javascript:void(0)" isActive>
              {' '}
              Link 2{' '}
            </KynHeaderLink>
            <KynHeaderLink href="javascript:void(0)">
              Link 3
              <KynHeaderLink slot="links" href="javascript:void(0)">
                {' '}
                Sub Link # 1{' '}
              </KynHeaderLink>
              <KynHeaderLink slot="links" href="javascript:void(0)">
                {' '}
                Sub Link 2{' '}
              </KynHeaderLink>
            </KynHeaderLink>
          </KynHeaderNav>

          <KynHeaderFlyouts>
            <KynHeaderFlyout>
              <span slot="button">Sign in</span>

              <div>
                <KynHeaderLink href="javascript:void(0)"> Login </KynHeaderLink>
                <KynHeaderLink href="javascript:void(0)"> Sign up </KynHeaderLink>
              </div>
            </KynHeaderFlyout>

            <KynHeaderFlyout assistiveText="My Account" hideArrow>
              <KynHeaderAvatar initials="KB" slot="button" />

              <KynHeaderLink href="javascript:void(0)"> Logout </KynHeaderLink>
            </KynHeaderFlyout>
          </KynHeaderFlyouts>
        </KynHeader>

        <KynLocalNav>
          <KynLocalNavLink href="javascript:void(0)" active="">
            <UserAvatar size={20} slot="icon" />
            Link 1
          </KynLocalNavLink>

          <KynLocalNavLink href="javascript:void(0)">
            <UserAvatar size={20} slot="icon" />
            Link 2
            <KynLocalNavLink slot="links" href="javascript:void(0)">
              {' '}
              L2 Link 1{' '}
            </KynLocalNavLink>
            <KynLocalNavLink slot="links" href="javascript:void(0)">
              {' '}
              L2 Link 2{' '}
            </KynLocalNavLink>
          </KynLocalNavLink>

          <KynLocalNavLink href="javascript:void(0)" expanded="">
            <UserAvatar size={20} slot="icon" />
            Link 3
            <KynLocalNavLink slot="links" href="javascript:void(0)">
              L2 Link 1
              <KynLocalNavLink slot="links" href="javascript:void(0)">
                {' '}
                L3 Link 1{' '}
              </KynLocalNavLink>
              <KynLocalNavLink slot="links" href="javascript:void(0)">
                {' '}
                L3 Link 2{' '}
              </KynLocalNavLink>
            </KynLocalNavLink>
          </KynLocalNavLink>
        </KynLocalNav>

        <main>
          <div className="kd-grid">
            <div className="kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-12">
              <h1 className="kd-type--headline-03">Shidoka React Sample App</h1>
            </div>

            <div className="kd-grid__col--sm-4 kd-grid__col--md-4 kd-grid__col--lg-8">
              <KdChart
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
              <KdChart
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

        <KynFooter>
          <span slot="copyright"> Copyright &copy; 2023 Kyndryl Inc. All rights reserved. </span>
        </KynFooter>
      </KynUIShell>
    </>
  );
}

export default App;
