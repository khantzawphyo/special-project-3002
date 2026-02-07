import {
  IconArrowUpRight,
  IconCalendar,
  IconCheck,
  IconClock,
  IconDownload,
  IconFileText,
  IconUsers
} from '@tabler/icons-react';

export default function ProjectDetail() {
  return (
    <div className='mx-auto max-w-7xl px-4 py-10 bg-neutral-50 dark:bg-neutral-950 min-h-screen font-sans'>
      {/* Header Section */}
      <div className='mb-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6'>
        <div className='space-y-2'>
          <div className='flex items-center gap-3'>
            <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-xs font-bold'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
              </span>
              ACTIVE
            </span>
          </div>
          <h1 className='text-4xl font-black tracking-tight text-neutral-900 dark:text-white'>
            Edge Computing for Smart Cities
          </h1>
        </div>

        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all'>
            <IconDownload size={18} stroke={2.5} />
            Download Report
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
        {[
          {
            label: 'Supervisor',
            value: 'Dr. Aung Aung',
            icon: <IconUsers className='text-primary-500' />,
          },
          {
            label: 'Team Members',
            value: '3',
            icon: <IconUsers className='text-purple-500' />,
          },
          {
            label: 'Start Date',
            value: 'Dec 01, 2025',
            icon: <IconCalendar className='text-orange-500' />,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className='group bg-white dark:bg-neutral-900 rounded-3xl p-6 border border-neutral-200/60 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='flex justify-between items-start'>
              <div className='p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800'>
                {stat.icon}
              </div>
              <IconArrowUpRight
                size={20}
                className='text-neutral-300 group-hover:text-primary-500 transition-colors'
              />
            </div>
            <div className='mt-4'>
              <div className='text-xs font-bold text-neutral-400 uppercase tracking-widest'>
                {stat.label}
              </div>
              <div className='text-2xl font-black mt-1 text-neutral-900 dark:text-white'>
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
        <div className='lg:col-span-2 space-y-10'>
          <section>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-xl font-bold text-neutral-900 dark:text-white'>
                Project Activity
              </h3>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800'>
                <div className='h-12 w-12 rounded-xl bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600'>
                  <IconCheck size={24} stroke={3} />
                </div>
                <div className='flex-1'>
                  <div className='flex justify-between items-center'>
                    <h4 className='font-bold text-neutral-800 dark:text-neutral-200'>
                      Midterm Seminar Completed
                    </h4>
                    <span className='text-xs font-mono text-neutral-400 uppercase'>
                      12 Jan 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className='text-xl font-bold mb-4 text-neutral-900 dark:text-white flex items-center gap-2'>
              Project Members
              <span className='text-xs font-normal text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded'>
                3 Total
              </span>
            </h3>

            <div className='divide-y divide-neutral-100 dark:divide-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden'>
              {['Mg Mg', 'Kyaw Kyaw', 'Thiri'].map((name) => (
                <div
                  key={name}
                  className='flex items-center justify-between p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors'
                >
                  <div className='flex items-center gap-4'>
                    <div className='h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500'>
                      <IconUsers size={20} stroke={1.5} />
                    </div>
                    <div>
                      <div className='text-sm font-bold text-neutral-900 dark:text-white'>
                        {name}
                      </div>
                      <div className='text-xs font-medium text-neutral-500'>
                        example@miit.edu.mm
                      </div>
                    </div>
                  </div>

                  <span className='text-[10px] font-bold tracking-widest text-neutral-400 uppercase border border-neutral-200 dark:border-neutral-700 px-2 py-1 rounded'>
                    Student
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className='space-y-6'>
          <div className='bg-neutral-900 dark:bg-primary-700 rounded-4xl p-8 text-white relative overflow-hidden'>
            <div className='relative z-10'>
              <div className='flex items-center gap-2 mb-6 opacity-80'>
                <IconClock size={20} />
                <span className='text-sm font-bold tracking-widest uppercase'>
                  Project Progress
                </span>
              </div>
              <div className='text-5xl font-black mb-2'>65%</div>
              <p className='text-primary-100/80 text-sm font-medium mb-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className='h-2 w-full bg-white/20 rounded-full overflow-hidden'>
                <div className='h-full bg-white' style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>

          <div className='bg-white dark:bg-neutral-900 rounded-4xl p-8 border border-neutral-200 dark:border-neutral-800'>
            <h4 className='font-bold text-lg mb-6 flex items-center gap-2'>
              <IconFileText className='text-primary-500' /> Resources
            </h4>
            <div className='space-y-5'>
              {[
                'ProjectProposal.pdf',
                'MidTermReport.docx',
                'MidTermPPT.pptx',
              ].map((file) => (
                <div
                  key={file}
                  className='flex items-center justify-between group cursor-pointer'
                >
                  <span className='text-sm font-semibold text-neutral-600 dark:text-neutral-400 group-hover:text-primary-500 transition-colors'>
                    {file}
                  </span>
                  <IconDownload
                    size={16}
                    className='text-neutral-300 group-hover:text-primary-500'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
