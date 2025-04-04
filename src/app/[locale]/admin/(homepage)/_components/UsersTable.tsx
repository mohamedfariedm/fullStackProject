"use client"

import React from "react"

import { useEffect, useState } from "react"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { uploadImage } from "@/utils/crudService"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { supabase } from "@/lib/supabaseClient"
import { toast } from "sonner"
import { Plus, Trash } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const langs = ["en", "ar", "fr", "pt"]

const ProductSchema = z.object({
  id: z.number().optional(),
  type: z.string().min(1, "Type is required"),
  name: z.record(z.string()),
  description: z.record(z.string()),
  metaTitle: z.record(z.string()),
  metaDescription: z.record(z.string()),
  main_image: z.array(z.string()).optional(),
  image_array: z.array(z.string()).optional(),
  aboutUs: z.object({
    title: z.record(z.string()),
    description: z.record(z.string()),
    images: z.array(z.string()).optional(),
    checklist: z.array(z.record(z.string())).optional(),
    features: z
      .array(
        z.object({
          icon: z.string(),
          title: z.record(z.string()),
        }),
      )
      .optional(),
  }),
  relatedField: z
    .array(
      z.object({
        url: z.string(),
        image: z.string(),
        name: z.record(z.string()),
        categorie: z.record(z.string()),
      }),
    )
    .optional(),
})

type ProductForm = z.infer<typeof ProductSchema>

const ProductsTable = () => {
  const [products, setProducts] = useState<ProductForm[]>([])
  console.log("products", products)

  const [editing, setEditing] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: {},
      description: {},
      metaTitle: {},
      metaDescription: {},
      image_array: [],
      main_image: [],
      type: "marbel",
      aboutUs: {
        title: {},
        description: {},
        features: [],
        checklist: [],
        images: [],
      },
      relatedField: [],
    },
  })

  // Field arrays for dynamic fields
  const {
    fields: checklistFields,
    append: appendChecklist,
    remove: removeChecklist,
  } = useFieldArray({
    control,
    name: "aboutUs.checklist",
  })

  const {
    fields: featuresFields,
    append: appendFeature,
    remove: removeFeature,
  } = useFieldArray({
    control,
    name: "aboutUs.features",
  })

  const {
    fields: relatedFields,
    append: appendRelated,
    remove: removeRelated,
  } = useFieldArray({
    control,
    name: "relatedField",
  })

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*")
    if (error) toast.error("Failed to fetch products")
    else setProducts(data)
  }
  console.log(errors)

  const onSubmit = async (values: ProductForm) => {
    if (editing && values.id) {
      const { error } = await supabase.from("products").update(values).eq("id", values.id)
      if (error) toast.error("Failed to update")
      else toast.success("Updated")
    } else {
      const { error } = await supabase.from("products").insert(values)
      if (error) toast.error("Failed to insert")
      else toast.success("Inserted")
    }
    reset()
    setEditing(false)
    fetchProducts()
  }

  const deleteProduct = async (id: any) => {
    const { error } = await supabase.from("products").delete().eq("id", id)
    if (error) toast.error("Delete failed")
    else {
      toast.success("Deleted")
      fetchProducts()
    }
  }

  const handleImageUpload = async (e: any, field: string) => {
    const files = e.target.files
    const uploaded = await Promise.all(Array.from(files).map((file: any) => uploadImage(file)))
    const clean = uploaded.filter(Boolean)
    setValue(field as any, clean)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // Icons for features
  const iconOptions = [
    "flaticon-tile-2",
    "flaticon-modern-art",
    "flaticon-marble",
    "flaticon-stone",
    "flaticon-polish",
    "flaticon-quality",
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Card className="p-4 space-y-4">
          <h2 className="text-xl font-bold">Product Form</h2>
          <Label>Type</Label>
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Select   value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-white border shadow-lg rounded-md p-2 space-y-1 flex">
                  <SelectItem value="marbel">Egyptian Marble</SelectItem>
                  <SelectItem value="granite">Egyptian Granite</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {langs.map((lang) => (
            <div key={lang} className="grid grid-cols-1 gap-4">
              <Label>{`Name (${lang})`}</Label>
              <Input {...register(`name.${lang}`)} placeholder={`Name (${lang})`} />
              <Label>{`Description (${lang})`}</Label>
              <Input {...register(`description.${lang}`)} placeholder={`Description (${lang})`} />
              <Label>{`Meta Title (${lang})`}</Label>
              <Input {...register(`metaTitle.${lang}`)} placeholder={`Meta Title (${lang})`} />
              <Label>{`Meta Desc (${lang})`}</Label>
              <Input {...register(`metaDescription.${lang}`)} placeholder={`Meta Desc. (${lang})`} />
              <Label>{`About Title (${lang})`}</Label>
              <Input {...register(`aboutUs.title.${lang}`)} placeholder={`About Title (${lang})`} />
              <Label>{`About Desc (${lang})`}</Label>
              <Textarea {...register(`aboutUs.description.${lang}`)} placeholder={`About Desc (${lang})`} />
            </div>
          ))}

<Label>Upload Main Image</Label>
<div className="flex gap-2 flex-wrap">
  {watch("main_image")?.map((img, idx) => (
    <div key={idx} className="relative">
      <img src={img} alt="Main" className="w-16 h-16 object-cover rounded" />
      <Button
        type="button"
        size="icon"
        variant="destructive"
        className="absolute top-0 right-0 text-xs"
        onClick={() => setValue("main_image", watch("main_image")?.filter((_, i) => i !== idx))}
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  ))}
</div>
<Input type="file" onChange={(e) => handleImageUpload(e, "main_image")} multiple />

<Label>Upload Gallery Images</Label>
<div className="flex gap-2 flex-wrap">
  {watch("image_array")?.map((img, idx) => (
    <div key={idx} className="relative">
      <img src={img} alt="Gallery" className="w-16 h-16 object-cover rounded" />
      <Button
        type="button"
        size="icon"
        variant="destructive"
        className="absolute top-0 right-0 text-xs"
        onClick={() => setValue("image_array", watch("image_array")?.filter((_, i) => i !== idx))}
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  ))}
</div>
<Input type="file" onChange={(e) => handleImageUpload(e, "image_array")} multiple />

<Label>About Us Images</Label>
<div className="flex gap-2 flex-wrap">
  {watch("aboutUs.images")?.map((img, idx) => (
    <div key={idx} className="relative">
      <img src={img} alt="About Us" className="w-16 h-16 object-cover rounded" />
      <Button
        type="button"
        size="icon"
        variant="destructive"
        className="absolute top-0 right-0 text-xs"
        onClick={() => setValue("aboutUs.images", watch("aboutUs.images")?.filter((_, i) => i !== idx))}
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  ))}
</div>
<Input type="file" onChange={(e) => handleImageUpload(e, "aboutUs.images")} multiple />


          {/* Checklist Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Checklist Items</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => appendChecklist(langs.reduce((acc, lang) => ({ ...acc, [lang]: "" }), {}))}
              >
                <Plus className="h-4 w-4 mr-1" /> Add Item
              </Button>
            </div>

            {checklistFields.map((field, index) => (
              <Card key={field.id} className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Checklist Item {index + 1}</h4>
                  <Button type="button" variant="destructive" size="sm" onClick={() => removeChecklist(index)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {langs.map((lang) => (
                    <Input
                      key={`${field.id}-${lang}`}
                      {...register(`aboutUs.checklist.${index}.${lang}` as const)}
                      placeholder={`Item text (${lang})`}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Features</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  appendFeature({
                    icon: iconOptions[0],
                    title: langs.reduce((acc, lang) => ({ ...acc, [lang]: "" }), {}),
                  })
                }
              >
                <Plus className="h-4 w-4 mr-1" /> Add Feature
              </Button>
            </div>

            {featuresFields.map((field, index) => (
              <Card key={field.id} className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Feature {index + 1}</h4>
                  <Button type="button" variant="destructive" size="sm" onClick={() => removeFeature(index)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-2">
                  <Label>Icon</Label>
                  <Controller
                    control={control}
                    name={`aboutUs.features.${index}.icon` as const}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select icon" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-white border shadow-lg rounded-md p-2 space-y-1 flex">
                          {iconOptions.map((icon) => (
                            <SelectItem key={icon} value={icon}>
                              {icon}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {langs.map((lang) => (
                    <Input
                      key={`${field.id}-${lang}`}
                      {...register(`aboutUs.features.${index}.title.${lang}` as const)}
                      placeholder={`Feature title (${lang})`}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Related Fields Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label>Related Products</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  appendRelated({
                    url: "",
                    image: "",
                    name: langs.reduce((acc, lang) => ({ ...acc, [lang]: "" }), {}),
                    categorie: langs.reduce((acc, lang) => ({ ...acc, [lang]: "" }), {}),
                  })
                }
              >
                <Plus className="h-4 w-4 mr-1" /> Add Related Product
              </Button>
            </div>

            {relatedFields.map((field, index) => (
              <Card key={field.id} className="p-3">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Related Product {index + 1}</h4>
                  <Button type="button" variant="destructive" size="sm" onClick={() => removeRelated(index)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-2 mb-2">
                  <Input
                    {...register(`relatedField.${index}.url` as const)}
                    placeholder="URL (e.g. about-us.html?name=Product%20Name)"
                  />
              <Label>Related Product Image</Label>
<div className="flex gap-2 items-center">
  <Input type="file" onChange={async (e) => {
    const files = e.target.files
    if (!files || !files.length) return
    const uploaded = await uploadImage(files[0])
    if (uploaded) setValue(`relatedField.${index}.image`, uploaded)
  }} />
  {watch(`relatedField.${index}.image`) && (
    <img src={watch(`relatedField.${index}.image`)} alt="Preview" className="w-16 h-16 object-cover rounded" />
  )}
</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {langs.map((lang) => (
                    <React.Fragment key={`${field.id}-${lang}`}>
                      <Input
                        {...register(`relatedField.${index}.name.${lang}` as const)}
                        placeholder={`Product name (${lang})`}
                      />
                      <Input
                        {...register(`relatedField.${index}.categorie.${lang}` as const)}
                        placeholder={`Category (${lang})`}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Button type="submit">{editing ? "Update" : "Create"}</Button>
        </Card>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Products</h2>
        {products.map((item) => (
          <Card key={item.id} className="p-4 space-y-2">
            <p className="font-bold">{item.name?.en}</p>
            <p className="text-sm text-muted-foreground">{item.description?.en}</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  reset(item)
                  setEditing(true)
                }}
              >
                Edit
              </Button>
              <Button variant="destructive" onClick={() => deleteProduct(item.id)}>
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductsTable

