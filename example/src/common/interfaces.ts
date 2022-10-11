import { fabric } from 'fabric'

interface BaseObject {
  id: string
  name: string
  description?: string
}
export type FabricRect = fabric.Rect & BaseObject
export type FabricCircle = fabric.Circle & BaseObject
export type FabricTriangle = fabric.Triangle & BaseObject
export type FabricObject = fabric.Object & BaseObject
export type FabricObjects = FabricObject | FabricRect | FabricCircle | FabricTriangle

export type FabricRectOptions = fabric.IRectOptions & BaseObject
export type FabricCircleOptions = fabric.ICircleOptions & BaseObject
export type FabricTriangleOptions = fabric.ITriangleOptions & BaseObject
export type FabricObjectOptions = fabric.IObjectOptions & BaseObject

export type FabricObjectsOptions = FabricObjectOptions | FabricRect | FabricCircle | FabricTriangle

// CONTEXT TYPES

export type CanvasType = 'editor' | 'previews'
export type ToolboxType = 'textbox' | 'image' | 'previews' | 'default'
export type ContextMenuType = 'canvas' | 'object'
export interface ContextMenu {
  type: ContextMenuType
  visible: boolean
  top: number
  left: number
}

type FontVariant = '300' | 'regular' | '400' | '500' | '600' | '700' | '800'

type FontFile = Record<FontVariant, string>
export interface IFontFamily {
  id: string
  family: string
  variants: FontVariant[]
  files: FontFile[]
  subsets: string[]
  version: string
  lastModified: string
  category: string
  kind: string
}
