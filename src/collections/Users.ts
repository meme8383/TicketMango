import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
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
