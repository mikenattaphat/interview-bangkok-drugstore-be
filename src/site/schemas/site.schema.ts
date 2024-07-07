import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SiteDocument = Site & Document;

@Schema()
export class Site {
  @Prop({ required: true })
  site_id: string;

  @Prop({ required: true })
  site_desc: string;

  @Prop({ required: true })
  site_address: string;

  @Prop({ required: true })
  site_tel: string;

  @Prop({ required: true, type: String })
  site_close_time: string;

  @Prop({ required: true, type: String })
  site_open_time: string;

  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
  })
  location: {
    type: string;
    coordinates: number[];
  };
}

const SiteSchema = SchemaFactory.createForClass(Site);
SiteSchema.index({ location: '2dsphere' }, { name: 'location_2dsphere' });

export { SiteSchema };
