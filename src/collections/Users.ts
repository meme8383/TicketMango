import { CollectionConfig, Access } from 'payload/types';

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user?.role === 'admin') {
    return true;
  }

  return {
    id: {
      equals: user?.id,
    },
  };
};

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    read: adminsAndUser,
    create: () => true,
    delete: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'role',
      defaultValue: 'user',
      required: true,

      type: 'select',
      options: [
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
    },
  ],
};
