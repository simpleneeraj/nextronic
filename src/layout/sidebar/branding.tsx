import {
  cn,
  Card,
  CardBody,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from '@nextui-org/react';
import { Icon } from '@iconify/react';
import appConfig from '@/constants/config.json';

const iconClasses =
  'text-xl text-default-500 pointer-events-none flex-shrink-0';

const Branding = () => {
  // Function to show notifications based on action
  function showNotification(action: string) {
    let title = '';
    let body = '';

    switch (action) {
      case 'profile':
        title = 'Profile';
        body = 'You selected Profile. Manage your personal details here.';
        break;
      case 'organization':
        title = 'Organization';
        body = 'You selected Organization. Manage organization settings here.';
        break;
      case 'settings':
        title = 'Settings';
        body = 'You selected Settings. Configure your preferences here.';
        break;
      case 'notifications':
        title = 'Notifications';
        body = 'You selected Notifications. View recent updates here.';
        break;
      case 'support':
        title = 'Support';
        body = 'You selected Support. Contact us for assistance.';
        break;
      case 'logout':
        title = 'Logout';
        body = 'You logged out. See you next time!';
        break;
      default:
        title = 'Unknown Action';
        body = 'No specific notification available for this action.';
    }

    // Display the notification
    new window.Notification(title, { body, requireInteraction: true });
  }

  return (
    <Dropdown placement="right-start">
      <DropdownTrigger>
        <Card
          className="min-h-16 bg-transparent border border-default-100 hover:shadow-md transition-all"
          isPressable
        >
          <CardBody className="flex items-center justify-center gap-2 flex-row">
            <Icon
              icon={'solar:face-scan-square-line-duotone'}
              className="h-8 w-8"
            />
            <span className="font-semibold text-default-600">
              {appConfig.name}
            </span>
          </CardBody>
        </Card>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="User actions"
        variant="flat"
        onAction={(key) => showNotification(key as string)}
      >
        {/* Profile Section */}
        <DropdownItem
          key="profile"
          shortcut="⌘P"
          startContent={
            <Icon
              icon={'solar:user-circle-line-duotone'}
              className={iconClasses}
            />
          }
        >
          Profile
        </DropdownItem>

        {/* Organization Section */}
        <DropdownItem
          key="organization"
          shortcut="⌘O"
          startContent={
            <Icon
              icon={'solar:buildings-2-line-duotone'}
              className={iconClasses}
            />
          }
        >
          Organization
        </DropdownItem>

        {/* Settings */}
        <DropdownItem
          key="settings"
          shortcut="⌘S"
          startContent={
            <Icon
              icon={'solar:settings-line-duotone'}
              className={iconClasses}
            />
          }
        >
          Settings
        </DropdownItem>

        {/* Notifications */}
        <DropdownItem
          key="notifications"
          shortcut="⌘N"
          startContent={
            <Icon icon={'solar:bell-line-duotone'} className={iconClasses} />
          }
        >
          Notifications
        </DropdownItem>

        {/* Support */}
        <DropdownItem
          key="support"
          shortcut="⌘H"
          startContent={
            <Icon
              icon={'solar:chat-square-call-line-duotone'}
              className={iconClasses}
            />
          }
        >
          Support
        </DropdownItem>

        {/* Logout */}
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧L"
          startContent={
            <Icon
              icon={'solar:login-line-duotone'}
              className={cn(iconClasses, 'text-danger')}
            />
          }
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Branding;
