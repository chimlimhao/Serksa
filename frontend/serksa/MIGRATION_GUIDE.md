# Migrating Concepts to Sanity CMS

## Why Migrate?

Currently, your concepts are hardcoded in TypeScript files (`lib/concepts-data.ts` and `lib/concept-content.ts`). This means:
- ❌ You need to edit code to update content
- ❌ Non-technical team members can't manage content
- ❌ Changes require code deployments

After migration to Sanity:
- ✅ Manage content through Sanity Studio UI
- ✅ No code changes needed for content updates
- ✅ Real-time content updates
- ✅ Version history and collaboration

## Migration Steps

### 1. Get a Sanity Write Token

1. Go to https://www.sanity.io/manage
2. Select your project "Serksa"
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Name it: `Migration Token`
6. Permissions: **Editor**
7. Copy the token

### 2. Set Up Environment Variable

Create a `.env` file in `frontend/serksa/`:

```bash
SANITY_WRITE_TOKEN=your_token_here
```

### 3. Install Dependencies

```bash
cd frontend/serksa
npm install @sanity/client dotenv tsx
```

### 4. Run the Migration

```bash
npx tsx scripts/migrate-concepts.ts
```

This will:
- Read all 54 concepts from your local files
- Create them in Sanity CMS
- Show progress for each concept

### 5. Verify in Sanity Studio

1. Open http://localhost:3333
2. Click on **Concept** in the sidebar
3. You should see all 54 concepts listed!

### 6. Update Your Frontend to Use Sanity

After migration, update your frontend to fetch from Sanity instead of local files.

## Troubleshooting

**Error: "Missing SANITY_WRITE_TOKEN"**
- Make sure you created the `.env` file with the token

**Error: "Document already exists"**
- The migration has already run. Delete concepts in Sanity Studio first, or modify the script to update instead of create.

**Error: "Cannot find module"**
- Run `npm install @sanity/client dotenv tsx` first

## After Migration

Once migration is complete and verified:
1. Update frontend to fetch from Sanity API
2. Remove or archive the old TypeScript data files
3. Delete the migration token for security
