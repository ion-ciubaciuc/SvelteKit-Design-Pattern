import type { ProductCollectionResponse, ProductResponse } from '$lib/server/httpConsumers';
import { BasePaginationDto } from '../basePaginationDto';

export class ProductCollectionDto extends BasePaginationDto {
	products?: ProductResponse[];

	constructor(productCollectionResponse: ProductCollectionResponse | undefined) {
		super();

		if (productCollectionResponse) {
			this.products = productCollectionResponse.products!;
			this.limit = productCollectionResponse.limit ?? this.limit;
			this.skip = productCollectionResponse.skip ?? this.skip;
			this.total = productCollectionResponse.total ?? this.total;
		} else {
			this.products = [] as ProductResponse[];
		}
	}
}
