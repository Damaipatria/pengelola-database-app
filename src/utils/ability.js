import { defineAbility } from '@casl/ability';

export default defineAbility((can) => {
  can('read', ['ADMIN', 'SUPER_ADMIN']);
});