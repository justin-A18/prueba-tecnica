import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

import {
	TypographyH1,
	TypographyH3,
	TypographyH4,
	TypographyP,
} from '@/components/shared/typography';

import { buttonVariants } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

import { useCountry } from '@/hooks/country/useCountry';
import { useImage } from '@/hooks/images/useImage';
import { Loader } from '@/components/shared/loader';

export const CountryPage = () => {
	const params = useParams();

	const { data, loading } = useCountry(params.code || '');
	const { image, isLoading } = useImage(data?.country.name || '');

	return (
		<section className='max-w-4xl w-full flex flex-col gap-4 mx-auto py-16 px-4 relative'>
			{loading ? (
				<Loader />
			) : (
				<>
					<header className='w-full space-y-4'>
						{isLoading ? (
							<Skeleton className='w-full h-40 rounded-sm' />
						) : (
							<img
								className='w-full h-40 object-cover object-center rounded-sm'
								src={image}
								alt={data?.country.name}
							/>
						)}

						<div className='space-y-2'>
							<div className='flex flex-col sm:flex-row sm:items-center justify-between'>
								<TypographyH1 className=''>
									{data?.country.emoji} {data?.country.name}
								</TypographyH1>

								<TypographyH3 className='text-lg sm:text-xl'>
									{data?.country.capital}
								</TypographyH3>
							</div>

							<TypographyP className='font-medium'>
								{data?.country.continent.name} - {data?.country.continent.code}
							</TypographyP>
						</div>
					</header>

					<hr className='border-2 border-slate-200 w-[98%] mx-auto' />

					<Link
						to='/'
						className={buttonVariants({
							variant: 'custom-button',
							className: 'absolute top-4 left-4 flex items-center gap-1',
						})}>
						<ChevronLeft className='size-4' /> Volver atras
					</Link>

					<div className='space-y-4'>
						<div className='flex flex-col gap-2'>
							<TypographyH4>Languages</TypographyH4>

							<ul className='px-5'>
								{data?.country.languages.map((language) => (
									<li
										key={language.name}
										className='list-disc'>
										{language.name}
									</li>
								))}
							</ul>
						</div>

						<div className='flex items-center gap-2'>
							<TypographyH4>Teléfono: </TypographyH4>
							<TypographyP>+ {data?.country.phone}</TypographyP>
						</div>

						<div className='flex items-center gap-2'>
							<TypographyH4>Moneda: </TypographyH4>
							<TypographyP>{data?.country.currency}</TypographyP>
						</div>

						<div className='flex items-center gap-2'>
							<TypographyH4>Región: </TypographyH4>
							<TypographyP>{data?.country.awsRegion}</TypographyP>
						</div>
					</div>
				</>
			)}
		</section>
	);
};
