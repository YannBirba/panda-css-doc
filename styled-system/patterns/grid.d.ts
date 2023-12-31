import type { SystemStyleObject, ConditionalValue } from '../types'
import type { PropertyValue } from '../types/prop-type'
import type { Properties } from '../types/csstype'
import type { Tokens } from '../tokens'

export type GridProperties = {
   gap?: PropertyValue<'gap'>
	columnGap?: PropertyValue<'gap'>
	rowGap?: PropertyValue<'gap'>
	columns?: ConditionalValue<number>
	minChildWidth?: ConditionalValue<Tokens["sizes"] | Properties["width"]>
}


type GridOptions = GridProperties & Omit<SystemStyleObject, keyof GridProperties >


export declare function grid(options?: GridOptions): string
