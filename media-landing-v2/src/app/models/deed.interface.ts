



interface Deed {
  name: string;
  description?: string;
  minAge?: number;
  maxAge?: number;
  references?: string[];
  isActive?: boolean;
  id: number;
  dateAdded: Date;
  dateUpdated: Date;
}

export interface SequencedDeedModel extends Deed {
}

interface CreateDeed {
  name: string;
  description?: string;
  minAge?: number;
  maxAge?: number;
  action?: string;
  categoryId: number;
  type: string;
  isActive?: boolean;
}

export interface CreateSequencedDeedModel extends CreateDeed {
}
