import { useHeaderInitializer } from '@/hooks/use-header-initializer';
import { HasRole } from '@/lib/utils';
import type { SupervisorData } from '@/types';
import { useState } from 'react';
import UnAuthorized from '../auth/un-authorized';
import SupervisorsTable from './components/supervisors-table';

export default function SupervisorsPage() {
  useHeaderInitializer('MIIT| Supervisors', 'Project Supervisors');
  const demoSupervisorData: SupervisorData[] = [
    {
      id: 1,
      name: 'Dr. Aung Kyaw',
      email: 'aung.kyaw@miit.edu',
      status: 'active',
      role: 'Supervisor',
      rank: { id: 1, name: 'Professor', description: '' },
      department: { id: 1, name: 'Computer Engineering' },
    },
    {
      id: 2,
      name: 'Dr. May Htun',
      email: 'may.htun@miit.edu',
      status: 'active',
      role: 'Supervisor',
      rank: { id: 2, name: 'Associate Professor', description: '' },
      department: { id: 2, name: 'Information Technology' },
    },
    {
      id: 3,
      name: 'Dr. Ko Ko',
      email: 'koko@miit.edu',
      status: 'inactive',
      role: 'Supervisor',
      rank: { id: 3, name: 'Assistant Professor', description: '' },
      department: { id: 1, name: 'Computer Engineering' },
    },
  ];
	useHeaderInitializer("MIIT| Supervisors", "Assigned Supervisors");
	const [supervisorData, setSupervisorData] = useState<SupervisorData[] | null>(
		[],
	);

  const [supervisorData] = useState<SupervisorData[] | null>(
    demoSupervisorData,
  );

  if (HasRole('Student')) return <UnAuthorized />;

  return (
    <div className='mx-auto max-w-7xl'>
      <h1 className='text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100'>
        Supervisors List ( 2025-2026 I Sem )
      </h1>
      <p className='text-sm text-neutral-500'>
        Browse and manage project supervisors with their assignments and
        departments.
      </p>
      {supervisorData && <SupervisorsTable supervisorData={supervisorData} />}
    </div>
  );
	if (HasRole("Student")) return <UnAuthorized />;

	return (
		<div className="mx-auto max-w-7xl">
			<h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
				Supervisors
			</h1>
			<p className="text-sm text-neutral-500">
				Browse and manage project supervisors with their assignments and
				departments.
			</p>
			{supervisorData && <SupervisorsTable supervisorData={supervisorData} />}
		</div>
	);
}
